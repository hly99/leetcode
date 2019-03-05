#include<bits/stdc++.h>
using namespace std;
int  used[100];
int result[100];

void perm(int a[],int step,int target){
	if(step>=3&&result[0]!=0){
		for(int i=0;i<3;i++){
			printf("%d",result[i]);
		}
		printf("\n");
		return;
	}
	for(int i=0;i<target;i++){
		if(used[i]!=false)
		continue;		
		used[i]=true;
		result[step]=a[i];
		perm(a,step+1,target);
		used[i]=false;
	}
}
int main(){
	int n;
	while(scanf("%d",&n)!=EOF,n!=0){
		int arr[n];
		for(int i=0;i<n;i++){
			scanf("%d",&arr[i]);
		}
		perm(arr,0,n);
	}
}
