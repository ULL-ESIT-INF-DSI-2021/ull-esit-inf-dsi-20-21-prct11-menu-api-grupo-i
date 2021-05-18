import * as request from 'request';

export const ingrediente = (command: string, callback:
  (error: string | undefined, output: string | undefined) => void) => {
  const url = 'http://localhost:3000/ingredients';
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Error: ${error.message}`, undefined);
    } else if (response.body.error) {
      callback(`Error: ${response.body.error.type}`, undefined);
    } else {
      if (command === 'Create') {

      } else if (command === 'Delete') {

      } else if (command === 'Read') {

      } else if (command === 'Update') {

      }
    }
  });
};

export const plato = (command: string, callback:
  (error: string | undefined, output: string | undefined) => void) => {
  const url = 'http://localhost:3000/courses';
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Error: ${error.message}`, undefined);
    } else if (response.body.error) {
      callback(`Error: ${response.body.error.type}`, undefined);
    } else {
      if (command === 'Create') {

      } else if (command === 'Delete') {

      } else if (command === 'Read') {

      } else if (command === 'Update') {

      }
    }
  });
};


export const menu = (command: string, callback:
  (error: string | undefined, output: string | undefined) => void) => {
  const url = 'http://localhost:3000/menus';
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Error: ${error.message}`, undefined);
    } else if (response.body.error) {
      callback(`Error: ${response.body.error.type}`, undefined);
    } else {
      if (command === 'Create') {

      } else if (command === 'Delete') {

      } else if (command === 'Read') {

      } else if (command === 'Update') {

      }
    }
  });
};

