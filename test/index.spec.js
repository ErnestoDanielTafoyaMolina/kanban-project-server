import app from "../src/app";
import request from "supertest";
describe('GET/tasks', () => {
    test('should respond with 200 status', async() => {
      const response = await request(app).get('/api/task/1').send()
      expect(response.statusCode).toBe(401);
    })
    
});
