# def change(x):
#     x = 50
#     print("Inside:", x)

# a = 10
# change(a)
# print("Outside:", a)

def change(lst):
    lst.append(100)

my_list = [1, 2, 3]
# change(my_list)
print(my_list)