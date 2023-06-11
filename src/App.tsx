import { Router, Pages } from 'common/router';
import { Layout } from 'components/layout';
import './App.css';
import './App.less';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Pages />
      </Layout>
    </Router>
  )
};

export default App;
