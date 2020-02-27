const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();

require('../config/passport')(passport);
require('dotenv').config();

const User = require('../models').User;

const db = require('../models/index');
const sequelize = require('sequelize');
const uuidV4 = require('uuid/v4');

const axios = require('axios');
const qs = require('qs');

router.get('/climate', async function(req, res) {
  var username = req.query.username;
  var cityName = req.query.cityName;
  var state = req.query.state;
  var status = null;
  User.sync();

  await User
    .findOne({
      where: {
        username: username
      }
    })
    .then((user) => {
      
      status = true;

      if (cityName && state) {
        user.update({
          cityName: cityName,
          state: state
        });
      } else {
        cityName = user.cityName;
        state = user.state;
      }
    })
    .catch((error) => {
      User
      .create({
        username: username,
        cityName: cityName,
        state: state
      })
      .then((user) => {
        status = true;
      })
      .catch((error) => {
        status = false;
        res.status(400).send({ message: error });
      });
    });

  if (status) {
    axios({ method: 'GET', url: 'http://apiadvisor.climatempo.com.br/api/v1/locale/city',
        params: {
          name: cityName,
          state: state,
          token: process.env.API_CLIMA_TOKEN
        }
    })
      .then((response) => {
            // res.json(response.data);
        var cityID = response.data[0].id;
        axios({ method: 'GET', url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+cityID+'/hours/72?token='+process.env.API_CLIMA_TOKEN
        })
          .then((response) => {
            res.json(response.data);
          })
          .catch((error) => {
            // res.json(error.response.data);
            axios({
              method: 'PUT',
              url: 'http://apiadvisor.climatempo.com.br/api-manager/user-token/'+process.env.API_CLIMA_TOKEN+'/locales',
              data: qs.stringify({
                localeId: [cityID],
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
            })
              .then((response) => {
                // res.json(response.data);
                axios({ method: 'GET', url: 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/'+cityID+'/hours/72?token='+process.env.API_CLIMA_TOKEN
                })
                  .then(async (response) => {
                    res.json(response.data);
                  })
                  .catch((error) => {
                    // res.json(error.response.data);
                    res.json({'error': 'Erro de Consulta'});
                  });
              })
              .catch((error) => {
                // res.json(error.response.data);
                res.json({'error': 'Erro de Consulta'});
              });
          });
    })
    .catch((error) => {
      // res.json(error.response.data);
      res.json({'error': 'Erro de Consulta'});
    });
  }

});

module.exports = router;
