import PropTypes from 'prop-types';

export const AuthPropTypes = PropTypes.shape({
    admin: PropTypes.shape({
        nama: PropTypes.string,
        username: PropTypes.string,
    }),
    aslab: PropTypes.shape({
        npm: PropTypes.string,
        nama: PropTypes.string,
    }),
    praktikan: PropTypes.shape({
        npm: PropTypes.string,
        nama: PropTypes.string,
    }),
});
