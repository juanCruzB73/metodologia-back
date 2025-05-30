  import dotenv from 'dotenv';
  import app from './app.js';
  import { PrismaClient } from '@prisma/client';
  dotenv.config();

  const prisma=new PrismaClient();

  app.listen(process.env.PORT,()=>{
      console.log(`app runnig on port ${process.env.PORT}`);
  });

  process.on('SIGINT', async () => {
    console.log('Cerrando conexión a la base de datos...');
    await prisma.$disconnect();
    process.exit(0);
  });