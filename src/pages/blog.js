import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
	<Layout>
		<SEO title="Blog" />
		<nav className="blogNav">
			<Link to="/post1/">Awe Inspiring Post</Link>
			<Link to="/post2/">The Post</Link>
		</nav>
	</Layout>
)

export default BlogPage
