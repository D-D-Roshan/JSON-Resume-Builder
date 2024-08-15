import { connect } from 'react-redux';
import ResumeDisplay from './ResumeDisplay';

const mapStateToProps = (state) => ({
  resume: state.resume,
  layout: state.resume.layout,
});

export default connect(mapStateToProps)(ResumeDisplay);
