import { db } from "@/lib/db";
import { getUser } from "@/lib/auth";
async function admin(req:Request){return (await getUser(req))?.isAdmin}
export async function PUT(req:Request,{params}:{params:Promise<{id:string}>}){if(!await admin(req))return Response.json({error:"Unauthorized"},{status:403});const {id}=await params;const b=await req.json();await db.execute({sql:"UPDATE menu_items SET name=?,category=?,price=?,description=?,available=? WHERE id=?",args:[b.name,b.category,Number(b.price),b.description??"",b.available===false?0:1,id]});return Response.json({ok:true})}
export async function DELETE(req:Request,{params}:{params:Promise<{id:string}>}){if(!await admin(req))return Response.json({error:"Unauthorized"},{status:403});const {id}=await params;await db.execute({sql:"DELETE FROM menu_items WHERE id=?",args:[id]});return Response.json({ok:true})}
