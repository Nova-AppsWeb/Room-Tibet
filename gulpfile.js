const ghPages = require('gh-pages')
const path = require('path')

function deploy(cb) {
	ghPages.publish(path.join(process.cwd(), './build'), cb)
}
exports.deploy = deploy

const gulp = require('gulp')

// Tasks
require('./gulp/dev.js')
require('./gulp/docs.js')

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel(
			'html:dev',
			'sass:dev',
			'images:dev',
			'fonts:dev',
			'files:dev',
			'js:dev'
		),
		gulp.parallel('server:dev', 'watch:dev')
	)
)

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel(
			'html:docs',
			'sass:docs',
			'images:docs',
			'fonts:docs',
			'files:docs',
			'js:docs'
		),
		gulp.parallel('server:docs')
	)
)
