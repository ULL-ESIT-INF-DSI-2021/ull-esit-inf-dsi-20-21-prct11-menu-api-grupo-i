import * as express from 'express';
export const patchRouter = express.Router();

patchRouter.patch('/ingredients', async (req, res) => {
  if (!req.query.price) {
    return res.status(400).send({
      error: 'A title must be provided',
    });
}
return 0;
});

