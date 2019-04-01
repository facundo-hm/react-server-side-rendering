import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  About,
  Products,
  Product,
  Faq,
  ContactUs,
  TermsOfService
} from './components'
import { Header, Footer, AuthProvider } from './components/common'

class App extends React.Component {
  public componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  public render() {
    return (
      <div className="container-fluid app-container">
        <AuthProvider>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/products" exact component={Products} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/terms-of-service" exact component={TermsOfService} />
          </Switch>

          <Footer />
        </AuthProvider>
      </div>
    )
  }
}

export default App
