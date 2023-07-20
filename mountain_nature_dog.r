#set up libraries and objects
library(ggplot2) 
library(dplyr)
library(gridExtra)

# Load the data
playdata <- read.csv("playData.csv")

# Create a data frame of the play data
play_df <- data.frame(playdata)

# Calculate the rate of play by age
play_rate <- play_df %>%
  group_by(Age) %>%
  summarise(play_rate = mean(Play))

# Plot the play rate by age 
plot1 <- ggplot(play_rate, aes(x = Age, y = play_rate)) + 
  geom_point() +
  ggtitle("Play Rate by Age") +
  xlab("Age (Years)") + ylab("Average Play Rate")

# Calculate the average play rate by gender
play_gender <- play_df %>%
  group_by(Gender) %>%
  summarise(play_rate = mean(Play))

# Plot the play rate by gender
plot2 <- ggplot(play_gender, aes(x = Gender, y = play_rate)) + 
  geom_bar(stat = "identity") +
  ggtitle("Play Rate by Gender") +
  xlab("Gender") + ylab("Average Play Rate")

# Combine the figures into one plot
grid.arrange(plot1, plot2, ncol = 2)

# Calculate the number of hours of play
play_hours <- play_df %>%
  group_by(Activity) %>%
  summarise(play_hours = sum(Hours))

# Plot the number of hours of play by activity
plot3 <- ggplot(play_hours, aes(x = Activity, y = play_hours, fill = Activity)) +
  geom_bar(stat="identity") +
  ggtitle("Hours of Play by Activity") +
  xlab("Activity") + ylab("Hours")

# Calculate the average time spent on each activity by age
play_age <- play_df %>%
  group_by(Age, Activity) %>%
  summarise(play_hours = mean(Hours))

# Plot the average time spent on each activity by age
plot4 <- ggplot(play_age, 
     aes(x = Age, y = play_hours, fill = Activity)) +
  geom_bar(stat="identity", position = position_dodge()) +
  ggtitle("Hours of Play by Age and Activity") +
  xlab("Age") + ylab("Hours")

# Combine the figures into one plot
grid.arrange(plot3, plot4, ncol = 2)

# Calculate the rate of play by activity for each gender
play_gender_activity <- play_df %>%
  group_by(Gender, Activity) %>%
  summarise(play_rate = mean(Play))

# Plot the rate of play by activity for each gender
plot5 <- ggplot(play_gender_activity, 
           aes(x = Activity, y = play_rate, fill = Gender)) +
  geom_bar(stat="identity", position = position_dodge()) +
  ggtitle("Play Rate by Activity for Each Gender") +
  xlab("Activity") + ylab("Play Rate")

# Calculate the rate of play by activity for each age 
play_age_activity <- play_df %>%
  group_by(Age, Activity) %>%
  summarise(play_rate = mean(Play))

# Plot the rate of play by activity for each age 
plot6 <- ggplot(play_age_activity, 
            aes(x = Activity, y = play_rate, fill = Age)) +
  geom_bar(stat="identity", position = position_dodge()) +
  ggtitle("Play Rate by Activity for Each Age") +
  xlab("Activity") + ylab("Play Rate")

# Combine the figures into one plot 
grid.arrange(plot5, plot6, ncol = 2)

# Calculate the total amount of play for each gender
play_gender_total <- play_df %>%
  group_by(Gender) %>%
  summarise(play_total = sum(Play))

# Plot the total amount of play for each gender
plot7 <- ggplot(play_gender_total, aes(x = Gender, y = play_total)) + 
  geom_bar(stat = "identity") +
  ggtitle("Total Play by Gender") +
  xlab("Gender") + ylab("Total Play")

# Calculate the total amount of play for each age
play_age_total <- play_df %>%
  group_by(Age) %>%
  summarise(play_total = sum(Play))

# Plot the total amount of play for each age
plot8 <- ggplot(play_age_total, aes(x = Age, y = play_total)) + 
  geom_bar(stat = "identity") +
  ggtitle("Total Play by Age") +
  xlab("Age") + ylab("Total Play")

# Combine the figures into one plot
grid.arrange(plot7, plot8, ncol = 2)

# Calculate the total play time by age 
total_time <- play_df %>% 
  group_by(Age) %>% 
  summarise(total_time = sum(Hours))

# Plot the total play time by age 
plot9 <- ggplot(total_time, aes(x = Age, y = total_time)) + 
  geom_point() +
  ggtitle("Total Play Time by Age") +
  xlab("Age (Years)") + ylab("Total Play Time (Hours)")

# Calculate the total play time by gender
total_time_gender <- play_df %>% 
  group_by(Gender) %>% 
  summarise(total_time = sum(Hours))

# Plot the total play time by gender
plot10 <- ggplot(total_time_gender, aes(x = Gender, y = total_time)) + 
  geom_bar(stat = "identity") +
  ggtitle("Total Play Time by Gender") +
  xlab("Gender") + ylab("Total Play Time (Hours)")

# Combine the figures into one plot
grid.arrange(plot9, plot10, ncol = 2)