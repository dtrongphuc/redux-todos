import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
