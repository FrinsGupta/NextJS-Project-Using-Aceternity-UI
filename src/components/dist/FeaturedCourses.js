"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var FeaturedCourses = function () {
    return (React.createElement("div", { className: "py-3 bg-gray-900" },
        React.createElement("div", null,
            React.createElement("div", { className: "text-center" },
                React.createElement("h1", { className: "text-base text-teal-600 font-semibold tracking-wide uppercase" }, "FEATURED COURSES"),
                React.createElement("p", { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" }, "Learn With the best"))),
        React.createElement("div", { className: "mt-10 " },
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" }, "test")),
        React.createElement("div", { className: "mt-20 text-center" },
            React.createElement(link_1["default"], { href: "/courses", className: "px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200" }, "View All Courses"))));
};
exports["default"] = FeaturedCourses;
