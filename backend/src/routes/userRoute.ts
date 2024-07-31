import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,verify,decode} from 'hono/jwt'
import {signupInput,signinInput} from "@narutobhati/medium-common"


export const userRoute=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>()



userRoute.post("/signup",async (c)=> {

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body=await c.req.json()
    const {success}=signupInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            msg:"wrong input"
        })
      
    }
    try{
        
        const user=await prisma.user.create({
            data:{
                email: body.email,
                password: body.password,
                name: body.name
            },
      
        })
        const token= await sign({id: user.id},c.env.JWT_SECRET)
        return c.json({
            jwt:token,
            username:body.name
        })
  }catch(e){
    console.log(e)
    c.status(404)
    return c.text("signup  error")
  }
   
})

userRoute.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    try{
        const body=await c.req.json();
        const user =await prisma.user.findFirst({
            where:{
                email:body.username,
                password:body.password
            }
        })
        if(!user){
            c.status(403)
            return c.text("user not found")

        }
        const token=await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({
            jwt:token,
            username:user.name
        })
    }catch(e){
        console.log(e)
        c.status(411)
        c.text("signin error")
    }
})
  
  