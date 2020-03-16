
import '../styles/tailwind.css'
import { Row, Col, Card } from 'antd'
import Typical from 'react-typical'
import VertLayout from '../layouts/vertLayout'

const typicalSteps: (string | number)[]  = ['Quizbowl tournaments, ', 500, 'Quizbowl tournaments, without the complexity', 2000, 'Quizbowl tournaments, ', 500, 'Quizbowl tournaments, with all of the stats', 2000, 'Quizbowl tournaments, ', 500, 'Quizbowl tournaments, at twice the scale', 2000]

export default () => (
  <VertLayout title="Cloud-based quizbowl tournament hosting software - QBHQ" topLeftText="QBHQ">
    <Row type="flex" justify="center" className="py-12">
      <h1 className="text-5xl">The new standard in Quizbowl tournaments</h1>
    </Row>
    <Row type="flex" justify="center" className="py-12">
      <Typical
        steps={typicalSteps}
        loop={Infinity}
        wrapper="h1"
      />
    </Row>
    <Row type="flex" justify="center" gutter={8} className="pt-12"> 
      <Col xs={6}>
        <Card hoverable title="End-to-end tournament hosting">
          <img className="w-full" src="/undraw_online_organizer.svg"/>
          <div className="mt-4">
            <p>From Conception to cleanup, QBHQ keeps track of all logistics, including packet aquisition, scheduling, staff assignments, and more. It asks you all of the right questions at the right times, making your tournaments flawless, ensuring that first-time attendees turn into regulars, causing the communnity to grow.</p>
          </div>
        </Card>
      </Col>
      <Col xs={6}>
        <Card hoverable title="Advanced stats by default">
          <img className="w-full" src="/undraw_personal_goals.svg"/>
          <div className="mt-4">
            <p>QBHQ keeps incredibly detailed records, including word-level-resolution, subject-aware tossup statistics. This allows writers to produce better, more enjoyable, and more accesible questions in a data-driven manner, ensuring all teams an exhilarating, enjoyable experience.</p>
          </div>
        </Card>
      </Col>
      <Col xs={6}>
        <Card hoverable title="Unparalleled Efficicency">
          <img className="w-full" src="/undraw_powerful.svg"/>
          <div className="mt-4">
            <p>QBHQ empowers TD's with a full view of everything as it's happening. It also automates the grunt work, allowing them to spend more time directing an awesome tournament, and less time reading messy scoresheets</p>
          </div>
        </Card>
      </Col>
    </Row>
  </VertLayout>
)  