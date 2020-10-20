import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
import CoordinateInput from '../../Components/CoordinateInput';
import Equation from '../../Components/Equation/Equation';
import SplashScreen from '../../Components/SplashScreen';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            chart: 'bar',
            data: [65, 59, 80, 81, 56],
            labels: ['SampleX1', 'SampleX2', 'SampleX3', 'SampleX4', 'SampleX5'],
            scatterData:[ { x: 0, y: 0 }, { x: 50, y: 50 }, { x: 100, y: 100 }]
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ showSplashScreen: false })
        }, 2000);
    }

    updateCoordinates = ( xCoord, yCoord )  => {
        this.setState( prevState => ({
            scatterData: [...prevState.scatterData, {"x":xCoord, "y":yCoord}]
        }));
    }

    updateChart = ( chart ) => {
        this.setState({chart: chart});
    }


    render() {
        const { data, scatterData, labels, showSplashScreen } = this.state;
  

        if (showSplashScreen) {
            return <SplashScreen />;
        }

        return (
            <div>
                <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>This is is the Home Page and This coding style should be followed</Col>
                    </Row>
                </Container>
                <ChartSelector data={data} scatterData={scatterData} labels={labels} updateChart={this.updateChart} />
                <div
                    style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }}
                    className="col-sm-12"
                >
                    <CodeEditor />
                </div>
                <div className={this.state.chart === 'Scatter' ? 'd-block' : 'd-none'}>
                    <CoordinateInput updateCoordinates = {this.updateCoordinates} />
                </div>

                <div>
                    <Equation />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
