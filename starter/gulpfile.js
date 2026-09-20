import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("unit test", shell.task("parcel index.html"));

gulp.task("test", shell.task("parcel index.html"));

gulp.task("cypress", shell.task("npx cypress run"));

gulp.task("default", gulp.series("unit test", "test", "cypress"));
