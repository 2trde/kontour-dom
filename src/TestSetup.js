// setup file
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './LoadRenderer'

configure({ adapter: new Adapter() })
