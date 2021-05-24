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

The back-EMF appears in the electrical equations as $K_e \omega(t)$ where $K_e$ is the *back-EMF constant* and depends on the machine design, and $\omega(t)$ is the shaft rotational speed. Notice that at zero speed, the differential equation matches that of an RL (resistive-inductive) load.

$$
L_p \frac{\text{d}i(t)}{\text{dt}} = v(t) - R_p i(t) - K_e \omega(t)
$$

The DC machine electromagnetic torque $T_e(t)$ is proportional to the current $i(t)$ as given by the following equation where $K_t$ is the *torque constant* and is determined by the machine design.

$$
T_e(t) = K_t i(t)
$$

### Mechanical

The developed electromagnetic torque then acts to rotate the rotor and shaft. The shaft has a certian inertia $J_p$ value which determines the dynamics of the rotary motion. Typical machines also have damping and friction torques which act against the direction of motion -- the damping coefficient is $B_p$ and the friction value is $T_\mu$. The load torque is $T_L(t)$ and typically opposes positive motoring torque. The complete mechanical differential equation is given as follows:

$$
J_p \frac{\text{d}\omega(t)}{\text{dt}} = T_e(t) - B_p \omega(t) - T_\mu \text{sign}(\omega(t)) - T_L(t)
$$

Since the friction term $T_\mu \text{sign}(\omega(t))$ acts to make the mechanical system non-linear, it is typically ignored for analysis (i.e., $T_\mu = 0$). This is a reasonable assumption considering that friction is small in most systems.

$$
J_p \frac{\text{d}\omega(t)}{\text{dt}} = T_e(t) - B_p \omega(t) - T_L(t)
$$


### Block Diagram

The differential equations described above can be represented in block diagram form to better see the interactions between the electrical and mechanical systems. By convention, the block diagram is typically formed using integrator blocks as opposed to derivatives blocks.

Recall the simple rules for converting to the Laplace domain: $\int \rightarrow \frac{1}{s}$ and $\frac{\text{d}}{\text{dt}} \rightarrow s$.

First, the time-domain governing equations from the previous section are transformed to the Laplace domain (i.e., s-domain). Then, the equations are solved for the state variable (e.g., current, speed) in terms of the input (e.g., voltage, torque).

$$
i(s) = \frac{1}{s} \left( \frac{1}{L_p} \left( v(s) - R_p i(s) - K_e \omega(s) \right) \right)
$$

$$
\omega(s) = \frac{1}{s} \left( \frac{1}{J_p} \left( T_e(s) - B_p \omega(s) - T_L(s) \right) \right)
$$

Notice the duality between the electrical and mechanical systems -- the equation form is nearly identical. For example, it is clear in this form that the electrical resistance $R_p$ and mechanical damping $B_p$ are both damping terms; they both act to dampen their respective systems. Furthermore, the electrical inductance $L_p$ and mechanical inertia $J_p$ both determine the energy storage capability of each system; larger inductance or inertia result in slower system responses.


By combining the above equations together, a single block diagram is formed which models the complete DC Machine. Notice the cross-coupling between the electrical and mechanical equations from both the electromagnetic torque and rotary speed terms.

<img title="State feedback block diagram of DC Machine" src="/assets/images/machines/dc/dc_machine_block_diagram.svg" style="width:100%;"/>


## History

The DC machine dates back to the early 1800s when the first electric motors came into the world.

