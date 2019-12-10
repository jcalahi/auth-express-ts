import { Router, Request, Response } from 'express';

const router = Router();
/**
 * This is to handle poor type definitions
 * In type defs, body object is defined as "any"
 */
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get('/login', (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email: </label>
        <input name="email" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input name="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (email) {
    res.send(email.toUpperCase());
  } else {
    // status code 422
    res.send('You must provide an email');
  }
});

export { router };
