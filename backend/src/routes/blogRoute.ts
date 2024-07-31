import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRoute=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userID:string
    }
}>()

blogRoute.use( "/*", async (c,next)=>{
    const head= c.req.header("authorization")
    //@ts-ignore
    
    // @ts-ignore
    const response =await verify(head,c.env.JWT_SECRET)
    
    if(response.id){
       // @ts-ignore
        c.set("userID",response.id)
        await next();
    }
    else{
      return c.json({error: "unauthorised"});
      }
    })

blogRoute.post("/",async (c)=>{
    
    const body=await c.req.json()
    const userID=c.get("userID")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blog=await prisma.post.create({
            data:{
                tittle:body.tittle,
                content:body.content,
                author_id: userID,
            }
        })
        return c.json({
            id: blog.id,
            msg:"Blog Created successfully"
        })
    }catch(e){
        console.log(e)
        c.text("blog creating error")
    }
})

blogRoute.put("/",async (c)=>{
    const body=await c.req.json()
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const update=await prisma.post.update({
            where:{
                id:body.id,
            },
            data:{
                tittle:body.tittle,
                content:body.content
            }
        })
        return c.json({
            id: update.id,
            msg:"Blog updated successfully"
        })
    }catch(e){
        console.log(e)
        c.text("blog updating error")
    }
})

blogRoute.get("/bulk",async (c)=>{
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog=await prisma.post.findMany({
        select:{
            content:true,
            tittle:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    return c.json({blog})
})

blogRoute.get("/:id",async (c)=>{
    const id= c.req.param("id");
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blog=await prisma.post.findFirst({
            where:{
                id:id
            },
            select:{
                tittle:true,
                content:true,
                author:{
                    select:{
                        name:true
                }
            }
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        console.log(e)
        c.text("blog finding error")
    }
})

