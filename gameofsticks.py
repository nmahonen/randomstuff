"""
This is first project for programming course 1 at Tampere University
Name of the project: Game of sticks 
Info: Game where two players remove sticks from a pile of 21 sticks in turn 
until all sticks are gone. Only 1-3 sticks can be removed at one turn.
Author: nmahonen
"""

def main():
    print("Game of sticks")
    count = 21
    sticks = 21

    while sticks:
        """Game to be played until 0 (or less) sticks left"""

        player_1 = int(input("Player 1 enter how many sticks to remove: "))
        while player_1 < 1 or player_1 > 3:
            """Forbid the player to give wrong amount of sticks to remove"""
            print("Must remove between 1-3 sticks!")
            player_1 = int(input("Player 1 enter how many sticks to remove: "))
        if player_1 == 1 or player_1 == 2 or player_1 == 3:
            count =  count - player_1
            sticks =   count
            if sticks <= 0:
                print("Player 1 lost the game!")
                break
            print("There are",  count, "sticks left")


        player_2 = int(input("Player 2 enter how many sticks to remove: "))
        while player_2 < 1 or player_2 > 3:
            """Forbid the player to give wrong amount of sticks to remove"""
            print("Must remove between 1-3 sticks!")
            player_2 = int(input("Player 2 enter how many sticks to remove: "))
        if player_2 == 1 or player_2 == 2 or player_2 == 3:
            count =  count - player_2
            sticks =   count
            if sticks <= 0:
                print("Player 2 lost the game!")
                break
            print("There are",  count, "sticks left")


if __name__ == "__main__":
    main()