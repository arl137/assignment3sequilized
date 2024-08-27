module.exports = {
  development: {
    username: process.env.PGUSER || 'your_db_username',
    password: process.env.PGPASSWORD || 'your_db_password',
    database: process.env.PGDATABASE || 'your_db_name',
    host: process.env.PGHOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.PGPORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // atau true, tergantung pada sertifikat yang tersedia
      }
    }
  },
  test: {
    username: process.env.PGUSER || 'neondb_owner',
    password: process.env.PGPASSWORD || 'IjFbx30eCiHG',
    database: process.env.PGDATABASE || 'neondb',
    host: process.env.PGHOST || 'ep-yellow-voice-a5v7xgxv.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    port: process.env.PGPORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // atau true
      }
    }
  },
  production: {
    username: process.env.PGUSER || 'your_db_username',
    password: process.env.PGPASSWORD || 'your_db_password',
    database: process.env.PGDATABASE || 'your_production_db_name',
    host: process.env.PGHOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.PGPORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // atau true
      }
    }
  }
};
