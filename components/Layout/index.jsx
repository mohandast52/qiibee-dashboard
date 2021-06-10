import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
