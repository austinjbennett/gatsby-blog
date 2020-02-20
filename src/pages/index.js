import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Everything is awesome</h1>
		<h3>Everything is cool when you're part of a team</h3>
		<div style={{ maxWidth: `300px`, margin: `0 auto 1.45rem` }}>
			<Image />
		</div>
	</Layout>
)

export default IndexPage
