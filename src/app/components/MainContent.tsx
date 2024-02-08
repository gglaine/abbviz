import type { CSSProperties, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface VisitsTodayCardProps {
  style?: CSSProperties;
}

const VisitsTodayCard: React.FC<VisitsTodayCardProps> = ({ style }) => (
  <Card className="mb-4" style={style}>
    <Card.Body>
      <Card.Title>Visits Today</Card.Title>
      <div className="d-flex justify-content-between align-items-center">
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>4,332</span>
        <FontAwesomeIcon icon={faArrowTrendUp} />
      </div>
      <Row className="mt-2">
        <Col xs={4} className="text-center">
          <div style={{ fontWeight: 'bold' }}>0.5%</div>
          <div>Logins</div>
        </Col>
        <Col xs={4} className="text-center">
          <div style={{ fontWeight: 'bold' }}>4.5%</div>
          <div>Sign Out</div>
        </Col>
        <Col xs={4} className="text-center">
          <div style={{ fontWeight: 'bold' }}>Rate</div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const cardStyle = { height: '300px' };

const SimpleLineChart = () => {
    const data = [
      { value: 10 },
      { value: 20 },
      { value: 15 }
    ];
  
    return (
      <ResponsiveContainer width="100%" height={50}>
        <LineChart data={data}>
          <XAxis dataKey="value" hide />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  };

const ServerOverviewCard: React.FC<{ style?: CSSProperties }> = ({ style }) => (
  <Card className="mb-4" style={style}>
    <Card.Body>
      <Card.Title>Server Overview</Card.Title>
      {[...Array(3)].map((_, index) => (
        <Row key={index} className="mb-2">
          <Col sm={6}>60% / 37°С / 3.3 Ghz</Col>
          <Col sm={6}><SimpleLineChart /></Col>
        </Row>
      ))}
    </Card.Body>
  </Card>
);

const DailyLineChart = () => {
    const data = [
      { name: '18 Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: '19 Jan', uv: 3000, pv: 1398, amt: 2210 },
      { name: '20 Jan', uv: 2000, pv: 9800, amt: 2290 },
      { name: '21 Jan', uv: 2780, pv: 3908, amt: 2000 },
      { name: '22 Jan', uv: 1890, pv: 4800, amt: 2181 },
      { name: '23 Jan', uv: 2390, pv: 3800, amt: 2500 },
      { name: '24 Jan', uv: 3490, pv: 4300, amt: 2100 },
    ];
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  

const AnalyticsCards: React.FC<{ revenueChartChildren: ReactNode }> = ({ revenueChartChildren }) => (
  <Row>
    <Col md={3}>
      <VisitsTodayCard style={cardStyle} />
    </Col>
    <Col md={3}>
      <Card className="mb-4" style={cardStyle}>
        <Card.Body>
          <Card.Title>Revenue Breakdown</Card.Title>
          {revenueChartChildren}
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="mb-4" style={cardStyle}>
        <Card.Body>
          <Card.Title>App Performance</Card.Title>
          <Card.Text>View metrics</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <ServerOverviewCard style={cardStyle} />
    </Col>
  </Row>
);

const RevenueBreakdownChart = () => {
  const data = [
    { name: "Direct", value: 77 },
    { name: "SMX", value: 300 },
    { name: "Networks", value: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};


interface MainContentProps {
    isSidebarOpen: boolean;
  }

  const MainContent: React.FC<MainContentProps> = ({ isSidebarOpen }) => {
  return (
    <Container fluid>
      <h3 className="my-4">YOU ARE HERE: App &gt; Main &gt; Analytics</h3>
      <AnalyticsCards revenueChartChildren={<RevenueBreakdownChart />} />
      <Row className="mb-5">
        <Col>
          <h2 className="mb-3">Daily Line Chart</h2>
          <DailyLineChart />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
