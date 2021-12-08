---
layout: post
title: Autonomous Vacuum Cleaner
image: img/vacuum_cleaner/cover.png
tags: [Python, ROS, Gazebo, RoboticsAcademy, PathPlanning, Exploration]
author: ajb
---



Coverage Path Planning is an important area of research in Path Planning for robotics, which involves finding a path that passes through every reachable position in its environment.

<div class="post-flex-display">
    <img src="/img/vacuum_cleaner/vacuum_cleaner_teaser.png" width="600" height="300" alt="diagram">
</div>



## RANDOM EXPLORATION

Implementation of navigation algorithms for an autonomous vacuum is the basic requirement for this exercise. The main objective is to cover the largest area of a house. The robot follows an increasing circle/square pattern.

Usually, coverage algorithms generate a linear, piecewise path composed of straight lines and sharp turns. This path is difficult for other autonomous drones like Underwater Vehicles, Aerial Vehicles and some Ground Vehicles difficult to follow. Path Smoothening is applied to these paths to effectively implement the algorithm.

<div class="post-flex-display">
    <img src="/img/vacuum_cleaner/vc.gif" width="600" height="300" alt="diagram">
</div>



## DECOMPOSITION ALGORITHM

We can employ decomposition techniques in our algorithm, to deal with the actual coverage of the surroundings. There are a lot of decomposition techniques available for our use. The Decomposition Algorithm decomposes the map into separate segments, which our robot can cover one by one. Decomposition can be directly related to Graph Theory, where the segments are taken as nodes and the edges connecting nodes depict that the adjacent segments share a common boundary. The robot can path plan to the nearest node and then start the sweeping again!



## VISIBILITY

Once, a certain segment has been swept. In order to reach the next segment(preferably the nearest one), there is again a multitude of path planning algorithms. The algorithm used in the reference solution is the Visibility Algorithm. As the name suggests, the visibility of the target is the basic building block.




## VISIBILITY ERROR

Sometimes due to close proximity to a corner, the robot may collide with it. To avoid the occurrence of any such event, we may also consider dilation techniques, since the map used is a binary image. Erosion is a Morphology Function that erodes away the boundaries of the foreground object(white is the object in the foreground).




## FULL VIDEO

<div class="video_container">
<iframe src="https://youtube.com/embed/khS8W59sfHE?mute=1" width="1200" height="600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
</div>


<div class="video_container">
<iframe src="https://youtube.com/embed/NWZWb_Hcihc?mute=1" width="1200" height="600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
</div>
