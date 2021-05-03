---
title: DC Machine
---

The DC machine performs electromechanical energy conversion using **direct current (DC)**, as opposed to alternating current (AC). DC motors are easy to operate and control since a simple battery can be used as the power source.

Typically, there are two active parts of the DC machine: the **rotor** which rotates with the shaft, and the **stator** which is stationary.

DC machines have two input terminals called the **positive** and **negative** input. In motoring operation, when a positive voltage is applied across the terminals, a current flows in the machine and the shaft spins. Conversely, in generating operation, when the shaft is rotated via an external mover, a voltage appears at the terminals of the machine. The voltage that appears is called the **back-EMF** (back electromotive force) and is directly proportional to the shaft speed. The machine creates torque when a current flows in the winding.

## Analysis

Typically, the governing equations are divided into: 1) electrical, 2) mechanical. These two equations are coupled via the machine's current and rotary speed.

In the following sections, parameters with a subscript "p" indicate *physical* values -- e.g. $R_p$ denotes the physical stator resistance value.

### Electrical

The following equation relates the applied voltage $v(t)$ to the resulting current $i(t)$, where $R_p$ is the winding resistance and $L_p$ is the winding inductance. Due to the winding inductance, a change is applied voltage $v(t)$ does not create an instantaneous change in current $i(t)$; the winding has *dynamics*.

The back-EMF appears in the electrical equations as $k_e \omega(t)$ where $k_e$ is the *back-EMF constant* and depends on the machine design, and $\omega(t)$ is the shaft rotational speed. Notice that at zero speed, the differential equation matches that of an RL (resistive-inductive) load.

$$
L_p \frac{\text{d}i(t)}{\text{dt}} = v(t) - R_p i(t) - k_e \omega(t)
$$

The DC machine electromagnetic torque $T_e(t)$ is proportional to the current $i(t)$ as given by the following equation where $k_t$ is the *torque constant* and is determined by the machine design.

$$
T_e(t) = k_t i(t)
$$

### Mechanical

The developed electromagnetic torque then acts to rotate the rotor and shaft. The shaft has a certian inertia $J_p$ value which determines the dynamics of the rotary motion. Typical machines also have damping and friction torques which act against the direction of motion -- the damping coefficient is $B_p$ and the friction value is $T_\mu$. The complete mechanical differential equation is given as follows:

$$
J_p \frac{\text{d}\omega(t)}{\text{dt}} = T_e(t) - B_p \omega(t) - T_\mu \text{sign}(\omega(t))
$$

### Block Diagram

The differential equations discribed above can be represented in block diagram form as follows, where integrators are shown using the $1/s$ blocks.

Notice the cross-coupling between the electrical and mechanical equations from both the electromagnetic torque and rotary speed.


## History

The DC machine dates back to the early 1800s when the first electric motors came into the world.

