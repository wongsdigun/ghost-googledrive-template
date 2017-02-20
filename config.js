// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://wdblog.herokuapp.com/',
        mail: {},
        // database: {
        //     client: 'sqlite3',
        //     connection: {
        //         filename: path.join(__dirname, '/content/data/ghost.db')
        //     },
        //     debug: false
        // },

        // DATABASE_URL: postgres://ngdxgyibtzlhdb:bcee020a75e58433fa15bdcdcaf8d9bd6c5d12aa49006685db174cf16a789b10@ec2-54-243-214-198.compute-1.amazonaws.com:5432/d4g717jmi1b3fu


        // database: {
        //     client: 'postgres',
        //     connection: {
        //         host: 'ec2-54-243-214-198.compute-1.amazonaws.com',
        //         user: 'ngdxgyibtzlhdb',
        //         password: 'bcee020a75e58433fa15bdcdcaf8d9bd6c5d12aa49006685db174cf16a789b10',
        //         database: 'd4g717jmi1b3fu';
        //         port: '5432'
        //     }
        // },

         database: {
            client: 'postgres',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            }
         },
         
        server: {
            // host: 'localhost',
            // port: '9999'
            host: '0.0.0.0',
            port: process.env.PORT
        }, 
        storage: {
            active: 'ghost-google-drive',
            'ghost-google-drive': {
                key: {
                "type": "service_account",
                "project_id": "ghost-159307",
                "private_key_id": "ca78f7e71445a13173aa2563bcb54cecfaeade5a",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDg4XKOhSMK0h3O\nXUuYtIzfseilhSKSufrLmwW81PxSinEm5Gh2a2Mus5Gyiju15VEYglIIB6McLM8U\nr/Zm0MTr8nHWN4QEajDvt/McjRZknAe9fqYQvUH5K+p6WYDmtWONeCLi9QY5TPCc\nSLWy/KSYXyb6XJyjVu6dw58/srzppUAzSFci/qRAMvB010f93u1CyYDMIxHpgxvp\n5KpLNtXbDcOlLlYgioa3zfmBH95eEuHF2tQTLEf/XVOClTsaIiNifG7fnMBFweW2\nhrCaT9t3mJ7NukXOh5J+27U2l2IMaW3K+WvUm73I3B5lOG+YxYejggs+Vjnfie7J\npDnNVFeHAgMBAAECggEAOSm1p/q5zJ9aikF23OtQP/CGVcTA5BE4ahcO31A4j3a3\nio5W63sirBVjPMIcqYEQGy3NUlM2qAvP289a0AnTdLKdMznLah/gLp9QwfovLgXn\nhciyx+CD66W5Jb6ooHyNQMHABHcKTPh81Q06erPz1vOhAdUW0AJiB2JZkaSKls07\nvSaqeFxGWNHYhYFOrZRUefdvGwB0pMPCfztDkIVXnIqbBi7RBTYD8+fKv5aU2ZGW\nQZLpx8QkBqxeyJ3zFTK2xbUxOX/RJMt+6846LZrsgKeT5X8MH/jEZ2SiaNcrl1l7\nnw2Pz9aaSS47TuK4c7PopSL9U5P9cXh4+z/8n59NMQKBgQD2aINJo+7rmOOsLDRK\nAhWQZZBIyolnRDatXwmZqG3RfpJW8LSt4kpgoqSKUgzvXIuKtpd5dO9u+42PCo6L\naGLj6snNTTbaW49x5sseTUWOH4cbARR3gbFF99unx34k4SCNFF35cPuN17kj39gt\nOfwaPQtt68YEp+XdwfVncgxn+QKBgQDpomjbKzUNarbdw76yNdPvNy8HgEca0mj6\n1BlOA+gSZKdxTZB9UpC3PcANYcurdyQ5pQM4xPbC/yomR8sBVljLzvu3zCGoj2Ic\nKx5OHq0dVBJd7w4vT+mEchXE6NPdiCWQkNj2me00gmDS03iUhB+N7n+NEh/UA3iS\nHh6K0EGbfwKBgQDHNRFG3LCQacdOb2JKnsq+NU3je1KAWQZ3PUkun5tA7bnzbaA0\nn6iP3Y12ggURElmB6EInoCDeMaJtDRTWoaqpJizFvHHnMHSUmgiGU+QylUyNyV65\nivE9Zrd/OenCePru85NR0USdlNSJqzNCxQkKUWXHFQC+zNoqYN88JVjgSQKBgBom\n++XMqFugHmgkiSwZqmeUnccRLORruSSaqVp6RXgJnFSqggoFO/3HA8B7ufivlXZ+\naiXopladiXJPhwHXUIk/2h1w1DOyGSFeEj5cYLRvvL6XC9dv8ovI2Xb5OP4LR2kv\nTZoNEOhXz87JrS2yvHV+xPhdlwJ8gPqaNIEFXtKxAoGBAJ08eItfQDCuPVEFloVE\nsut3W69kJkWn7ge5H6E4GDVFUXVYbpSfYMeKv/Iak7pvGzc34eOtdh0R7tv83QIr\nypPCrfH9WSb6NjhSkoZt4HK5jLIyitPDFaoxDBVsrijcVdTmMsd1/Ly5z4T5HcA1\nVwpJbA2bcBBOMLTw1ewejMm3\n-----END PRIVATE KEY-----\n",
                "client_email": "ghost-meridian@ghost-159307.iam.gserviceaccount.com",
                "client_id": "115957470398689636283",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://accounts.google.com/o/oauth2/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ghost-meridian%40ghost-159307.iam.gserviceaccount.com"
                }
            }
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            },
            pool: {
                afterCreate: function (conn, done) {
                    conn.run('PRAGMA synchronous=OFF;' +
                    'PRAGMA journal_mode=MEMORY;' +
                    'PRAGMA locking_mode=EXCLUSIVE;' +
                    'BEGIN EXCLUSIVE; COMMIT;', done);
                }
            },
            useNullAsDefault: true
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
