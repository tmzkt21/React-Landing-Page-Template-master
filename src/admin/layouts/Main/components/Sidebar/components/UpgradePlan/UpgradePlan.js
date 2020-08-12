import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          관리자 페이지 접속하였습니다.
          
        </Typography>
      </div>
      {/*<div className={classes.actions}>*/}
      {/*  <Link */}
      {/*    color="primary"*/}
      {/*    component="a"*/}
      {/*    variant="contained"*/}
      {/*    to="/"*/}
      {/*  >*/}
      {/*    홈으로 이동*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;
