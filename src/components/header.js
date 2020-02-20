import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `cornflowerblue`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 1440,
				padding: `1.45rem 1.0875rem`,
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<nav className="navigation" style={{ display: 'flex', alignItems: 'center', }}>
				<Link to="/blog" style={{ color: 'white', textDecoration: 'none', fontSize: '1.4rem', marginRight: '1.4rem', }}>Blog</Link>
				<Link to="/post1" style={{ color: 'white', textDecoration: 'none', fontSize: '1.4rem', marginRight: '1.4rem', }}>Awe Inspiring Post</Link>
				<Link to="/post2" style={{ color: 'white', textDecoration: 'none', fontSize: '1.4rem', marginRight: '1.4rem', }}>The Post</Link>
			</nav>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
