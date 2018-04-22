import webpack from 'webpack';
import webpackConfig from "../webpack.config.prod";
import colors from 'colors';
process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production via Webpack');

webpack(webpackConfig).run((err, stats) => {
        if (err) {
            console.log(err.bold.red);
            return 1;
        }
        const jsonStats = stats.toJson();
        if (jsonStats.hasErrors) {
            return jsonStats.errors.map(error => console.log(error.red));

        }
        if (jsonStats.hasWarnings) {
            console.log('webpack generated the following warnings: '.bold.yellow);
            return jsonStats.warnings.map(w=>console.log(w.yellow));
            
        }
        console.log(`webpack stats :${stats}`);
        console.log('your application has been compiled in production mode and written to /dist,it is ready to poll');
        
    })