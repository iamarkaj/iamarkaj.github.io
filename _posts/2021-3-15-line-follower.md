---
layout: post
title: Visual Follow Line on Formula 1
image: img/follow_line/follow_line_teaser.gif
tags: [Python, ROS, Gazebo, RoboticsAcademy, PID]
author: ajb
---



PID Control is the main fundamental behind this exercise. A PID controller continuously calculates an error value as the difference between the desired output and the current output and applies a correction based on proportional, integral, and derivative terms(denoted by P, I, D respectively).



### Proportional

The proportional Controller gives an output that is proportional to the current error. The error is multiplied by a proportionality constant to get the output. And hence, is 0 if the error is 0.


### Integral

Integral Controller provides a necessary action to eliminate the offset error which is accumulated by the P Controller. It integrates the error over a period of time until the error value reaches zero.


### Derivative

Derivative Controller gives an output depending upon the rate of change or error with respect to time. It gives the kick start for the output thereby increasing system response


<div class="post-flex-display">
<img src="/img/follow_line/follow_line_teaser.png" width="600" height="300" alt="diagram">
</div>




## TUNING METHODS

In order for the PID equation to work, we need to determine the constants of the equation. There are 3 constants called the gains of the equation. We have 2 main tuning methods for this.

### Trial and Error

It is a simple method of PID controller tuning. While the system or controller is working, we can tune the controller. In this method, first, we have to set Ki and Kd values to zero and increase proportional term (Kp) until the system reaches oscillating behavior. Once it is oscillating, adjust Ki (Integral term) so that oscillations stop and finally adjust D to get a fast response.

### Zeigler Nichols method

Zeigler-Nichols proposed closed-loop methods for tuning the PID controller. Those are the continuous cycling method and the damped oscillation method. Procedures for both methods are the same but oscillation behavior is different. In this, first, we have to set the p-controller constant, Kp to a particular value while Ki and Kd values are zero. Proportional gain is increased till the system oscillates at constant amplitude.



## FULL VIDEO

<div class="video_container">
<iframe src="https://youtube.com/embed/uaEjC9jOmtw?mute=1" width="1200" height="600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
</div>