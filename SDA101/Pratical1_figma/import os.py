import os
import json

# File to store attendance data
file_name = "attendance_data.json"

# Sample student list
students = ["Tenzin", "Karma", "Pema", "Sangay", "Dorji"]

# Load existing attendance data if file exists
if os.path.exists(file_name):
    with open(file_name, "r") as file:
        attendance_data = json.load(file)
else:
    attendance_data = {student: [] for student in students}

def mark_attendance():
    print("\n--- Mark Attendance ---")
    for student in students:
        while True:
            status = input(f"Is {student} present? (P/A): ").upper()
            if status in ["P", "A"]:
                attendance_data[student].append(status)
                break
            else:
                print("Invalid input! Enter P for Present or A for Absent.")
    save_data()
    print("Attendance for today recorded!\n")

def view_summary():
    print("\n--- Attendance Summary ---")
    for student in students:
        total_days = len(attendance_data[student])
        present_count = attendance_data[student].count("P")
        absent_count = attendance_data[student].count("A")
        percentage = (present_count / total_days * 100) if total_days > 0 else 0
        print(f"{student}: Present {present_count}, Absent {absent_count}, Attendance {percentage:.2f}%")
    print()

def save_data():
    with open(file_name, "w") as file:
        json.dump(attendance_data, file)

def main_menu():
    while True:
        print("===== Student Attendance Tracker =====")
        print("1. Mark Attendance")
        print("2. View Attendance Summary")
        print("3. Exit")
        choice = input("Enter your choice (1-3): ")
        if choice == "1":
            mark_attendance()
        elif choice == "2":
            view_summary()
        elif choice == "3":
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice! Please enter 1, 2, or 3.\n")

# Run the program
main_menu()
