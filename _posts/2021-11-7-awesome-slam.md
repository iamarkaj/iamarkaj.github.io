---
layout: post
title: EKF-SLAM and UKF-SLAM on Turtlebot3
image: img/awesome_slam/awesome_slam_teaser.gif
tags: [C++, ROS, Gazebo, Kalman-Filter, SLAM]
author: ajb
---

In statistics and control theory, Kalman filtering, also known as linear quadratic estimation (LQE), is an algorithm that uses a series of measurements observed over time, including statistical noise and other inaccuracies, and produces estimates of unknown variables that tend to be more accurate than those based on a single measurement alone, by estimating a joint probability distribution over the variables for each timeframe.


## OVERVIEW <a href="https://github.com/iamarkaj/AwesomeSLAM"><img src="https://img.shields.io/badge/GitHub-black" alt="stream" width="75" height="35"/></a>


#### EKF SLAM

Kalman filter has two steps, a prediction step, and a correction step. The prediction step takes the motion commands into account to predict the robot's position in the current time step. The correction step then compares the robot's actual observations with the predicted observations to correct the robot state. The observations, in this case, are all the detected cylindrical landmark positions.


#### UKF SLAM

The unscented Kalman filter is a nonlinear filter based on an unscented transform. For nonlinear systems, UKFs avoid linearization of the state and measurement equations. Additionally, the UKF principle is simple and easy to implement as it does not require the calculation of Jacobians at each time step, and the UKF is accurate up to second-order moments in the probability distribution function propagation whereas the EKF is accurate up to first-order moment.


## REFERENCES

[1] rlabbe: [Kalman-and-Bayesian-Filters-in-Python](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python)