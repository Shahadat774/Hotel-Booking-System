import 'dotenv/config'

type serverconfig ={
    PORT:number
}
export const Configserver : serverconfig={
 PORT:Number(process.env.PORT)||3001
}