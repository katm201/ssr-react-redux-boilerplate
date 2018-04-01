import { get } from 'axios';

describe('Server', () => { 
  it('should respond to GET / with status code 200', () => {
    return get('http://localhost:8080/')
      .then((response) => {
        expect(response.status).toEqual(200);
      })
      .catch((err) => {
        throw new Error(err);
      })
  });
});
