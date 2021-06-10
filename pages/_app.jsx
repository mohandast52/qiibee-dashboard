import App, { Container } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import initStore from '../store';
import './styles.less';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

/* MyApp.defaultProps = {
  resetOnModalCloseFn: () => {},
}; */

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);

// https://github.com/vercel/next.js/issues/7945
