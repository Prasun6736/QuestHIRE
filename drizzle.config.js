/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", 
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:3jbUhrKcBE8X@ep-floral-dream-a56tazzo.us-east-2.aws.neon.tech/Mockapp?sslmode=require'
  }
};
