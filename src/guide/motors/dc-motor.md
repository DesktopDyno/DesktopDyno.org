---
title: DC Motor
---

The DC motor performs electromechanical energy conversion using **direct current (DC)**, as opposed to alternating current (AC). DC motors are easy to operate and control since a simple battery can be used as the power source.

Typically, there are two active parts of the DC motor: the **rotor** which rotates with the shaft, and the **stator** which is stationary.

DC motors have two input terminals called the **positive** and **negative** input. In motoring operation, when a positive voltage is applied across the terminals, a current flows in the motor and the shaft spins. Conversely, in generating operation, when the shaft is rotated via an external mover, a voltage appears at the terminals of the motor. The voltage that appears is called the **back-EMF** (back electromotive force) and is directly proportional to the shaft speed. The motor creates torque when a current flows in the winding.

## Model

DC motors can be reasonably modeled using a few differential equations. Typically, the governing equations are divided into: 1) electrical, 2) mechanical. These two equations are coupled via the motor's current and rotary speed.

In the following sections, parameters with a subscript "p" indicate *physical* values -- e.g. $R_p$ denotes the physical stator resistance value.

### Electrical

The following equation relates the applied voltage $v(t)$ to the resulting current $i(t)$, where $R_p$ is the winding resistance and $L_p$ is the winding inductance. Due to the winding inductance, a change is applied voltage $v(t)$ does not create an instantaneous change in current $i(t)$; the winding has *dynamics*.

The back-EMF appears in the electrical equations as $K_e \omega(t)$ where $K_e$ is the *back-EMF constant* and depends on the motor design, and $\omega(t)$ is the shaft rotational speed. Notice that at zero speed, the differential equation matches that of an RL (resistive-inductive) load.

$$
L_p \frac{\text{d}i(t)}{\text{dt}} = v(t) - R_p i(t) - K_e \omega(t)
$$

The DC motor electromagnetic torque $T_e(t)$ is proportional to the current $i(t)$ as given by the following equation where $K_t$ is the *torque constant* and is determined by the motor design.

$$
T_e(t) = K_t i(t)
$$

### Mechanical

The developed electromagnetic torque then acts to rotate the rotor and shaft. The shaft has a certian inertia $J_p$ value which determines the dynamics of the rotary motion. Typical motors also have damping and friction torques which act against the direction of motion -- the damping coefficient is $B_p$ and the friction value is $T_\mu$. The load torque is $T_L(t)$ and typically opposes positive motoring torque. The complete mechanical differential equation is given as follows:

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

Notice the duality between the electrical and mechanical systems -- the equation form is nearly identical. For example, it is clear in this form that the electrical resistance $R_p$ and mechanical damping $B_p$ are both damping terms; they both act to dampen their respective systems and thus are sources of loss. Furthermore, the electrical inductance $L_p$ and mechanical inertia $J_p$ both determine the energy storage capability of each system; larger inductance or inertia result in slower system responses.


By combining the above equations together, a single block diagram is formed which models the complete DC motor. Notice the cross-coupling between the electrical and mechanical equations from both the electromagnetic torque $T_e$ and rotary speed $\omega$ terms.

<img title="State feedback block diagram of DC motor" src="/assets/images/motors/dc/dc-motor-block-diagram.svg" style="width:100%;"/>


## Typical Parameter Values

The DC motor model contains the following six parameters:

- Electrical: $L_p$, $R_p$
- Mechanical: $J_p$, $B_p$
- Motor Constants: $K_t$, $K_e$

These parameters can vary widely based on the motor design and application space. For example, small motors will tend to have different parameters compared to large motors. For simplicity, two motor designs will be highlighted here which are typical of real designs: large and small.

| Parameter | Name | Units | Small Motor | Large Motor |
| -- | -- | -- | -- | -- |
| $R_p$ | winding resistance | $\Omega$ | 0.1 to 1 | 0.01 to 0.1 |
| $L_p$ | winding inductance | $\text{H}$ | 0.1e-3 to 0.1 | 0.1e-3 to 0.1 |
| $J_p$ | rotational inertia | $\text{kg} \cdot \text{m}^2$ | 1e-6 to 100e-6 | 1e-3 to 100e-3 | 
| $B_p$ | rotational damping | $\frac{\text{N} \cdot \text{m}}{\text{rad/sec}}$ | 1e-6 to 100e-6 | 1e-6 to 100e-6 |
| $K_t$ | torque constant | $\frac{\text{N} \cdot \text{m}}{\text{A}}$ | 0.01 to 1 | 0.01 to 1 |
| $K_e$ | back-EMF constant | $\frac{\text{V}}{\text{(rad/sec)}}$ | 0.01 to 1 | 0.01 to 1 |


### Electrical

Since the electrical power loss is proportional to the winding resistance, motor designers tend to try to reduce the resistance $R_p$. For small motors, the total power loss is typically neglible since the total motor power is small. Therefore, small motors tend to have a higher resistance since less copper can be used which lowers material cost. However, for large motors, resistance-based losses can cause significant thermal issues thus pushing designers to minimize $R_p$.

The inductance $L_p$ is less affected by motor size, however, it varies widely based on the motor application. In practice, small inductance values can cause current ripple in the motor due to the switching nature of the drive power electronics. Large current ripple can cause issues such as increased torque ripple and higher losses. However, if the inductance is too large, the electrical dynamics can be limited. Furthermore, large inductance values typically require more materials, thus make the motor heavier and cost more.


The electrical time constant is given as $\tau_e = L_p / R_p$. This determines how fast the motor current changes as the voltage changes. Since the resistance of large motors is typically smaller compared to small motors, the large motors tend to have faster electrical dynamics.


### Mechanical

The size of the motor directly affects the rotational inertia: larger motors have a bigger moment of inertia. This means that large motors have slow mechanical dynamics; they change speed slowly.

The rotary damping typically comes from the motor bearings which hold the shaft. Typically, lower damping is better due to lower power loss.


### Motor Constants

The electromagnetic design of the motor determines the torque constant $K_t$ and back-EMF constant $K_e$. In MKS system of units, $K_t$ and $K_e$ are equal in value. Regardless of units, the two constants scale together: increasing $K_e$ will increase $K_t$ and vice-versa.

When the DC motor is driven using a voltage source, the resulting top speed is determined by the back-EMF constant. Thus, for high speed motors, $K_e$ is typically small. However, this also reduces $K_t$, thus limiting the torque per ampere of the motor. The best values for $K_t$ and $K_e$ are highly application dependent and are a leading driver during the motor design.


