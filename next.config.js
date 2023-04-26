/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    BASE_UPL: process.env.BASE_UPL,
    API_BASE_UPL: process.env.API_BASE_UPL,
    ADMIN_BASE_URL: process.env.ADMIN_BASE_URL,
    SITENAME: process.env.SITENAME,
    MONGO_DBURL: process.env.MONGO_DBURL,
    PERPAGE_DATA: process.env.PERPAGE_DATA,
    MLM_BASEURL: process.env.MLM_BASEURL,
    MLM_API_BASEURL: process.env.MLM_API_BASEURL,
    MONGO_DB_MLM_URL: process.env.MONGO_DB_MLM_URL,
    IMAGEPATH: process.env.IMAGEPATH,
    MLM_USER_API_BASEURL: process.env.MLM_USER_API_BASEURL,
    MLM_USER_BASEURL: process.env.MLM_USER_BASEURL,
  }
}

module.exports = nextConfig
