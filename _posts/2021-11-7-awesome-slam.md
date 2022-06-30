---
layout: post
title: Ekf Slam & Ukf Slam on Turtlebot3
image: img/awesome_slam/cover.png
tags: [C++, ROS, Gazebo, Kalman-Filter, SLAM]
customlink: true
customlinktitle: GitHub
customlinkaddress: https://github.com/iamarkaj/AwesomeSLAM
author: ajb
---

In statistics and control theory, Kalman filtering, also known as linear quadratic estimation (LQE), is an algorithm that uses a series of measurements observed over time, including statistical noise and other inaccuracies, and produces estimates of unknown variables that tend to be more accurate than those based on a single measurement alone, by estimating a joint probability distribution over the variables for each timeframe.

**EKF SLAM**
<br>
Kalman filter has two steps, a prediction step, and a correction step. The prediction step takes the motion commands into account to predict the robot's position in the current time step. The correction step then compares the robot's actual observations with the predicted observations to correct the robot state. The observations, in this case, are all the detected cylindrical landmark positions.

**UKF SLAM**
<br>
The unscented Kalman filter is a nonlinear filter based on an unscented transform. For nonlinear systems, UKFs avoid linearization of the state and measurement equations. Additionally, the UKF principle is simple and easy to implement as it does not require the calculation of Jacobians at each time step, and the UKF is accurate up to second-order moments in the probability distribution function propagation whereas the EKF is accurate up to first-order moment.

**References**
<br>
[1] rlabbe: [Kalman-and-Bayesian-Filters-in-Python](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python) <br>
[2] Circle Classification algorithm, J. Xavier et. al., Fast line, arc/circle and leg detection from laser scan data in a Player driver, ICRA 2005 <br>
[3] Circular Fitting algorithm, A. Al-Sharadqah and N. Chernov, Error Analysis for Circle Fitting Algorithms, Electronic Journal of Statistics (2009), Volume 3 p 886-911 <br>
[4] Udacity Sensor-fusion-engineer: [Nanodegree](https://www.udacity.com/course/sensor-fusion-engineer-nanodegree--nd313) <br>
[5] shangzhouye: [EKF-SLAM on Turtlebot3](https://github.com/shangzhouye/EKF-SLAM-on-Turtlebot3)
