#include<bits/stdc++.h>
using namespace std;
int arr[100];
int minsetp=INT_MAX;
int n;
void dfs(int i,int cur,int target){
	if(cur>=target){
		if(cur<minsetp)
		minsetp=cur;
		return;
	}
	if(i>=n)
	return;
	dfs(i+1,cur+arr[i],target);
	dfs(i+1,cur,target);
	return;        
}

int main(){
	int m;
	while(scanf("%d%d",&n,&m)!=EOF){
		for(int i=0;i<n;i++){
			scanf("%d",&arr[i]);
		}
		dfs(0,0,m);
		printf("%d\n",minsetp==INT_MAX?-1:minsetp);
		minsetp=INT_MAX;
	}
}
