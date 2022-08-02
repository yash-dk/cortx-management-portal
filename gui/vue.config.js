/*
* CORTX-CSM: CORTX Management web and CLI interface.
* Copyright (c) 2020 Seagate Technology LLC and/or its Affiliates
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published
* by the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
* For any questions about this software or licensing,
* please email opensource@seagate.com or cortx-questions@seagate.com.
*/
module.exports = {
    outputDir: 'web-dist',
    devServer: {
        
    //     proxy:  {
    //         "^/api/": {
    //           target:'https://ssc-vm-g2-rhev4-3392.colo.seagate.com:31169/',
    //           pathRewrite: { "^/api/": "/api/" },
    //     changeOrigin: true,
    //     logLevel: "debug"
    //   }
    // }
        proxy : {
            "^/*": {
                target: "https://ssc-vm-g4-rhev4-0392.colo.seagate.com:31169/",
                changeOrigin: true
              },
        }
        // host : "ssc-vm-g2-rhev4-3392.colo.seagate.com",
        // port : 31169,
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    pluginOptions: {
        i18n: {
          locale: 'en',
          fallbackLocale: 'en',
          localeDir: 'locales',
          enableInSFC: false
        } 
    }
}