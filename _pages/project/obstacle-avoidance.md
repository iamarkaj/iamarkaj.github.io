---
layout: page
title: Local Navigation with Virtual Force Field
permalink: /obstacle-avoidance
---

<div class="row">
    <div class="post-flex-display">
        <img src="/img/obstacle_avoidance/cover.png" width="600" height="300" alt="diagram" style="padding: 10px">
    </div>
    <div class="post-flex-display">
        <img src="/img/obstacle_avoidance/obstacle_avoidance_teaser.png" alt="diagram" width="600" height="300" style="padding: 10px">
    </div>
    <div class="post-flex-display">
        <img src="/img/obstacle_avoidance/top.gif" width="600" height="300" alt="diagram" style="padding: 10px">
    </div>
</div>

<div class="video_container">
    <iframe src="https://youtube.com/embed/txEzcxjcrdI?mute=1" width="600" height="300" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video" style="padding: 10px"></iframe>
</div>

Robot Navigation involves all the related tasks and algorithms required to make a robot from point A to point B autonomously without making any collisions. The Virtual Force Field Algorithm works in the following steps:
- The robot assigns an attractive vector to the waypoint that points towards the waypoint.
- The robot assigns a repulsive vector to the obstacle according to its sensor readings that point away from the waypoint.
- The robot follows the vector obtained by summing the target and obstacle vector.

**Determining The Vectors**
<br>
First of all, we need to generate the 3 required vectors, which are the Target Vector, Obstacle Vector, and the Direction Vector.

**1. Target Vector**
<br>
The target vector can be easily obtained by subtracting the position of the car from the position of the next waypoint. In order to implement this on the GUI interface of the exercise, in addition to the vector obtained by subtracting, we need to apply a rotation to the vector as well. The purpose of the rotation is to keep the target vector always in the direction of the waypoint and not in front of the car.

**2. Obstacle Vector**
<br>
The obstacle vector is to be calculated from the sensor readings we obtain from the surroundings of the robot. Each obstacle in front of the car is going to provide a repulsive vector, which we will add to obtain the resultant repulsive vector. Assign a repulsive vector, for each of the 180 sensor readings. The magnitude of the repulsive vector is inversely proportional to the magnitude of the sensor reading. Once, all the repulsive vectors are obtained they are all added, to get the resultant.

**3. Direction Vector**
<br>
Conventionally and according to the research paper of the VFF algorithm, in order to obtain the direction vector, we should add the target vector and the obstacle vector.
