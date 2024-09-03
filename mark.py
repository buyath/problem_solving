def check_mark(mark):
    if mark >= 100 :
        return "Grade A"
    elif mark >= 90:
        return "Grade B"
    
    elif mark  >= 80:
        return "Grade C"
    elif mark >= 70:
        return "Grade D"
    else:
        return "Grade F"
    
    
mark = int(input("enter your mark"))
print(check_mark(mark))
