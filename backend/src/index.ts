import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { userRoute } from './routes/userRoute'
import { blogRoute } from './routes/blogRoute'
import { cors } from 'hono/cors'
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();

app.use('/*', cors())

// app.use("/api/v1/blog/*", async (c,next)=>{
//   const head=c.req.header("authorization")
//   //@ts-ignore
 
//   // @ts-ignore
//   const response =await verify(head,c.env.JWT_SECRET)
//   if(response.id){
//    await next();
//   }
//   else{
//     return c.json({error: "unauthorised"});
//     }
//   }
// )

app.route("/api/v1/user",userRoute)
app.route("/api/v1/blog",blogRoute)






export default app
