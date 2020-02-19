import React, { Component } from 'react';
import { Container, Row, Col } from 'shards-react';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/assessment/Layout';
import Welcome from '../components/assessment/welcome/Welcome';
import Basic from '../components/assessment/basic/Basic';
import Nlp from '../components/assessment/nlp/Nlp';
import RiskFactors from '../components/assessment/risk-factors/RiskFactors';
import Suggest from '../components/assessment/suggest/Suggest';
import GeoRisk from '../components/assessment/geo-risks/GeoRisks';
import Question from '../components/assessment/question/Question';
import Summary from '../components/assessment/summary/Summary';

export class Assessment extends Component {
  state = {
    step: 1,
    patient: {
      sex: '',
      age: '',
      symptoms: {}
    }
  };

  onNextStep = () => {
    this.setState((prevState, _) => {
      return {
        step: prevState.step + 1
      };
    });
  };

  render() {
    let module = null;

    switch (this.state.step) {
      case 1:
        module = <Welcome />;
        break;
      case 2:
        module = <Basic />;
        break;
      case 3:
        module = <Nlp />;
        break;
      case 4:
        module = <RiskFactors />;
        break;
      case 5:
        module = <Suggest />;
        break;
      case 6:
        module = <GeoRisk />;
        break;
      case 7:
        module = <Question />;
        break;
      case 8:
        module = <Summary />;
        break;
      default:
        module = <Welcome />;
        break;
    }

    return (
      <div>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="Diagnose your disease"
              subtitle="Assessment"
              className="text-sm-left mb-3"
            />
          </Row>
          <Row>
            <Col>
              <Layout onNextStep={this.onNextStep}>{module}</Layout>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Assessment;
